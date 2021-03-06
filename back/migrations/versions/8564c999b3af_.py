"""empty message

Revision ID: 8564c999b3af
Revises: c40bff49a9ad
Create Date: 2018-06-06 11:02:46.549937

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8564c999b3af'
down_revision = 'c40bff49a9ad'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('authToken',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('token', sa.Text(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('token')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('authToken')
    # ### end Alembic commands ###
